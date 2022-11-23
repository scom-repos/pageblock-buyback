import { Container, Panel, customElements, ControlElement, Module, Input, application, Control } from '@ijstech/components';
import { EventId, isValidNumber, ITokenObject, limitInputNumber } from '@buyback/global';
import { getChainId, getTokenMap, GuaranteedBuyBackCampaign } from '@buyback/store';
import { TokenSelection } from '@buyback/token-selection';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			['campaign-config']: ControlElement;
		}
	}
};

@customElements('campaign-config')
export class CampaignConfig extends Module {
	private inputName: Input;
	private inputOfferIndex: Input;
	private pnlFromTokenSelection: Panel;
	private pnlToTokenSelection: Panel;
	private fromTokenSelection: TokenSelection;
	private toTokenSelection: TokenSelection;
	private fromToken: ITokenObject;
	private toToken: ITokenObject;
	private inputPrice: Input;
	private inputAmount: Input;
	private inputCommittedAmount: Input;
	private _isNew: boolean;
	private _data?: GuaranteedBuyBackCampaign;
	private isInitialized = false;

	constructor(parent?: Container, options?: any) {
		super(parent, options);
	}

	set isNew(value: boolean) {
		this._isNew = value;
		this.setupInput();
	}

	get isNew() {
		return this._isNew;
	}

	set data(value: GuaranteedBuyBackCampaign | undefined) {
		this._data = value;
		this.setupData();
	}

	get data() {
		return this._data;
	}

	private setupInput = () => {
		if (this.inputName) {
			this.inputName.enabled = !this.isNew;
			this.inputOfferIndex.enabled = this.isNew;
			this.inputPrice.enabled = this.isNew;
			this.inputAmount.enabled = this.isNew;
			this.inputCommittedAmount.enabled = this.isNew;
			if (this.fromTokenSelection) {
				this.fromTokenSelection.enabled = this.isNew;
			}
			if (this.toTokenSelection) {
				this.toTokenSelection.enabled = this.isNew;
			}
		}
	}

	private setupData = async () => {
		if (this.data) {
			const { projectName, offerIndex, tokenIn, tokenOut, idoPrice, idoAmount, committedAmount } = this.data;
			const interval = setInterval(async () => {
				if (this.isInitialized) {
					clearInterval(interval);
					const tokenMap = getTokenMap();
					this.inputName.value = projectName;
					this.inputOfferIndex.value = `${offerIndex}` || '';
					if (tokenOut) {
						const fromToken = tokenMap[tokenOut] || tokenMap[tokenOut.toLowerCase()];
						this.fromToken = fromToken;
						this.fromTokenSelection.token = fromToken;
					}
					if (tokenIn) {
						const toToken = tokenMap[tokenIn] || tokenMap[tokenIn.toLowerCase()];
						this.toToken = toToken;
						this.toTokenSelection.token = toToken;
					}
					this.inputPrice.value = `${idoPrice || ''}`;
					this.inputAmount.value = `${idoAmount || ''}`;
					this.inputCommittedAmount.value = `${committedAmount || ''}`;
					this.emitInput();
				}
			}, 200);
		}
	}

	private emitInput = () => {
		application.EventBus.dispatch(EventId.EmitInput);
	}

	private onInputIndex = () => {
		let value = this.inputOfferIndex.value;
		value = value.replace(/[^0-9]+/g, "");
		this.inputOfferIndex.value = value;
		this.emitInput();
	}

	private onInputNumber = (input: Control) => {
		limitInputNumber(input, 18);
		this.emitInput();
	}

	private onInputFromToken = (token: ITokenObject) => {
		this.fromToken = token;
		this.emitInput();
	}

	private onInputToToken = (token: ITokenObject) => {
		this.toToken = token;
		this.emitInput();
	}

	private onInputText = () => {
		this.emitInput();
	}

	checkValidation = () => {
		return !!this.inputName.value &&
			this.fromToken && this.toToken &&
			isValidNumber(this.inputOfferIndex.value) &&
			isValidNumber(this.inputPrice.value) &&
			isValidNumber(this.inputAmount.value) &&
			isValidNumber(this.inputCommittedAmount.value);
	}

	getData = () => {
		const buyback: GuaranteedBuyBackCampaign = {
			projectName: this.inputName.value,
			offerIndex: this.inputOfferIndex.value,
			tokenIn: this.toToken?.address || '',
			tokenOut: this.fromToken?.address || '',
			idoPrice: this.inputPrice.value,
			idoAmount: this.inputAmount.value,
			committedAmount: this.inputCommittedAmount.value,
		}
		return buyback;
	}

	async init() {
		super.init();
		this.fromTokenSelection = new TokenSelection();
		this.fromTokenSelection.onSelectToken = this.onInputFromToken;
		this.toTokenSelection = new TokenSelection();
		this.toTokenSelection.onSelectToken = this.onInputToToken;
		this.pnlFromTokenSelection.appendChild(this.fromTokenSelection);
		this.pnlToTokenSelection.appendChild(this.toTokenSelection);
		this.setupInput();
		this.isInitialized = true;
	}

	render() {
		return (
			<i-panel class="custom-scroll">
				<i-vstack gap={10} verticalAlignment="center" class="main-content">
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Project Name" />
							<i-label caption="*" font={{ color: '#F15E61', size: '16px' }} />
						</i-hstack>
						<i-input id="inputName" class="input-text w-input" onChanged={this.onInputText} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="From Token" />
							<i-label caption="*" font={{ color: '#F15E61', size: '16px' }} />
						</i-hstack>
						<i-panel id="pnlFromTokenSelection" class="w-input" />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="To Token" />
							<i-label caption="*" font={{ color: '#F15E61', size: '16px' }} />
						</i-hstack>
						<i-panel id="pnlToTokenSelection" class="w-input" />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Offer Index" />
							<i-label caption="*" font={{ color: '#F15E61', size: '16px' }} />
						</i-hstack>
						<i-panel class="w-input">
							<i-input id="inputOfferIndex" inputType="number" maxWidth={300} class="input-text w-input" onChanged={this.onInputIndex} />
						</i-panel>
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Buyback Price" />
							<i-label caption="*" font={{ color: '#F15E61', size: '16px' }} />
						</i-hstack>
						<i-panel class="w-input">
							<i-input id="inputPrice" inputType="number" maxWidth={300} class="input-text w-input" onChanged={this.onInputNumber} />
						</i-panel>
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Amount" />
							<i-label caption="*" font={{ color: '#F15E61', size: '16px' }} />
						</i-hstack>
						<i-panel class="w-input">
							<i-input id="inputAmount" inputType="number" maxWidth={300} class="input-text w-input" onChanged={this.onInputNumber} />
						</i-panel>
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Committed Amount" />
							<i-label caption="*" font={{ color: '#F15E61', size: '16px' }} />
						</i-hstack>
						<i-panel class="w-input">
							<i-input id="inputCommittedAmount" inputType="number" maxWidth={300} class="input-text w-input" onChanged={this.onInputNumber} />
						</i-panel>
					</i-hstack>
				</i-vstack>
			</i-panel>
		)
	}
}
