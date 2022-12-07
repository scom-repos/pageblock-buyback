import { Button, Container, HStack, Panel, customElements, ControlElement, Module, IEventBus, application, Label } from '@ijstech/components';
import { downloadJsonFile, EventId, registerSendTxEvents } from '@buyback/global';
import { getChainId, getNetworkInfo, GuaranteedBuyBackCampaign, isWalletConnected } from '@buyback/store';
import { Result } from '@buyback/result';
import { CampaignConfig } from './buyback';
import './panel-config.css';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['panel-config']: ControlElement;
    }
  }
};

@customElements('panel-config')
export class PanelConfig extends Module {
  private backElm: HStack;
  private wrapperNetworkElm: HStack;
  private networkElm: HStack;
  private lbNetworkName: Label;
  private buybackCampaignElm: HStack;
  private pnlInfoElm: Panel;
  private buybackResult: Result;
  private groupBtnSaveElm: HStack;
  private groupBtnDeployElm: HStack;
  private btnSave: Button;
  private btnDownload: Button;
  private btnExport: Button;
  private btnDeployExport: Button;
  private $eventBus: IEventBus;
  private isNew: boolean;
  private campaignConfig: CampaignConfig;
  onConfigSave: any;
  onReset: any;

  constructor(parent?: Container, options?: any) {
    super(parent, options);
    this.$eventBus = application.EventBus;
    this.registerEvent();
  }

  private registerEvent = () => {
    this.$eventBus.register(this, EventId.EmitInput, this.updateButton);
    this.$eventBus.register(this, EventId.IsWalletConnected, this.renderUI);
    this.$eventBus.register(this, EventId.IsWalletDisconnected, this.renderUI);
    this.$eventBus.register(this, EventId.chainChanged, this.onChangeChanged);
  }

  private renderUI = () => {
    const isConnected = isWalletConnected();
    this.networkElm.visible = !isConnected;
    this.buybackCampaignElm.visible = isConnected;
    this.updateNetworkName(getChainId());
  }

  private onChangeChanged = () => {
    const chainId = getChainId();
    this.updateNetworkName(chainId);
    this.updateButton();
  }

  showInputBuyback = async (isNew: boolean, buyback?: GuaranteedBuyBackCampaign) => {
    // this.wrapperNetworkElm.visible = isNew;
    this.groupBtnSaveElm.visible = !isNew;
    this.groupBtnDeployElm.visible = isNew;
    this.isNew = isNew;
    this.pnlInfoElm.clearInnerHTML();
    if (buyback) {
      await this.onAddBuyback(buyback);
    } else {
      this.onAddBuyback();
    }
  }

  private onAddBuyback = async (campaign?: GuaranteedBuyBackCampaign) => {
    this.campaignConfig = new CampaignConfig();
    this.campaignConfig.isNew = this.isNew;
    this.campaignConfig.data = campaign;
    this.pnlInfoElm.clearInnerHTML();
    this.pnlInfoElm.appendChild(this.campaignConfig);
  }

  onBack = () => {
    this.pnlInfoElm.clearInnerHTML();
    if (this.onReset) {
      this.onReset();
    }
  }

  private updateNetworkName = (chainId: number) => {
    const network = getNetworkInfo(chainId);
    this.lbNetworkName.caption = network ? network.name : 'Unknown Network';
  }

  private updateButton = () => {
    const valid = !!this.checkValidation();
    if (this.isNew) {
      if (this.btnDeployExport.rightIcon.visible) return;
      this.btnExport.enabled = valid;
      this.btnDeployExport.enabled = valid;
    } else {
      this.btnSave.enabled = valid;
      this.btnDownload.enabled = valid;
    }
  }

  private checkValidation = () => {
    if (this.campaignConfig) {
      return this.campaignConfig.checkValidation();
    }
    return false;
  }

  private getBuybackData = () => {
    return this.campaignConfig.getData();
  }

  private showResultMessage = (result: Result, status: 'warning' | 'success' | 'error', content?: string | Error) => {
    if (!result) return;
    let params: any = { status };
    if (status === 'success') {
      params.txtHash = content;
    } else {
      params.content = content;
    }
    result.message = { ...params };
    result.showModal();
  }

  private onSave = () => {
    if (!this.isNew && this.checkValidation()) {
      const buyback = this.getBuybackData();
      this.onConfigSave(buyback);
    }
  }

  private onDownload = (data?: any) => {
    if (this.isNew && data) {
      downloadJsonFile('buyback.json', { ...data });
      return;
    }
    if (this.checkValidation()) {
      const buyback = this.getBuybackData();
      downloadJsonFile('buyback.json', buyback);
    }
  }

  private onDeployBuyback = async () => {
    if (this.isNew && this.checkValidation()) {
      const buyback = this.getBuybackData();
      let result: GuaranteedBuyBackCampaign | null;
      this.showResultMessage(this.buybackResult, 'warning', `Deploying ${buyback.projectName}`);

      const onUpdateBtn = () => {
        this.btnDeployExport.rightIcon.visible = false;
        this.btnDeployExport.caption = 'Deploy and Export JSON';
        this.updateButton();
        this.backElm.classList.add('cursor-pointer');
        this.backElm.onClick = () => this.onBack();
      }

      const callBack = async (err: any, reply: any) => {
        if (err) {
          this.showResultMessage(this.buybackResult, 'error', err);
          onUpdateBtn();
        } else {
          this.showResultMessage(this.buybackResult, 'success', reply);
          this.backElm.classList.remove('cursor-pointer');
          this.backElm.onClick = () => {};
          this.btnExport.enabled = false;
          this.btnDeployExport.enabled = false;
          this.btnDeployExport.caption = 'Deploying & Exporting';
          this.btnDeployExport.rightIcon.visible = true;
        }
      };

      const confirmationCallBack = async (receipt: any) => {
        if (!result) return;
        onUpdateBtn();
      };

      registerSendTxEvents({
        transactionHash: callBack,
        confirmation: confirmationCallBack
      });

      // TODO
      // result = await deployBuyback(buyback, callBack);
      // if (result) {
      //   this.buybackResult.closeModal();
      //   const obj = {[chainId]: [{ ...result }]};
      //   this.onConfigSave(obj);
      //   confirmationCallBack(true);
      //   this.onDownload(obj);
      // }
    }
  }

  onConfirm() {
    if (this.isNew) {
      this.onDeployBuyback();
    } else {
      this.onSave();
    }
  }

  init() {
    super.init();
    this.buybackResult = new Result();
    this.appendChild(this.buybackResult);
  }

  render() {
    return (
      <i-panel class="panel-config custom-scroll">
        <i-panel id="configBuybacksElm" margin={{ left: 'auto', right: 'auto' }} width="100%" maxWidth={800}>
          <i-hstack id="backElm" gap={4} width="fit-content" margin={{ top: 5, bottom: 15, left: 'auto' }} verticalAlignment="center" class="cursor-pointer" onClick={this.onBack}>
            <i-icon name="arrow-left" fill='#FFFFFF' width={20} height={20} />
            <i-label caption="Back" font={{ size: '20px', bold: true, color: '#FFFFFF' }} />
          </i-hstack>
          <i-hstack id="networkElm" width="100%" height={150} verticalAlignment="center" horizontalAlignment="center">
            <i-label caption="Please connect with your network!" font={{ color: '#FFFFFF' }} />
          </i-hstack>
          <i-panel visible={false} id="buybackCampaignElm" width="100%">
            <i-hstack id="wrapperNetworkElm" width="100%" margin={{ bottom: 10 }} verticalAlignment="center" horizontalAlignment="center">
              <i-label id="lbNetworkName" font={{ color: '#F15E61', size: '20px', bold: true }} />
            </i-hstack>
            <i-vstack gap={10} verticalAlignment="center" class="main-content">
              <i-panel id="pnlInfoElm" />
              <i-hstack margin={{ top: 10 }} horizontalAlignment="center">
                <i-hstack id="groupBtnSaveElm" gap={10} margin={{ top: 20 }} verticalAlignment="center" horizontalAlignment="center" wrap="wrap">
                  <i-button
                    id="btnSave"
                    caption="Save"
                    enabled={false}
                    width={200}
                    maxWidth="100%"
                    class="btn-os"
                    onClick={this.onSave}
                  />
                  <i-button
                    id="btnDownload"
                    caption="Export JSON"
                    enabled={false}
                    width={200}
                    maxWidth="100%"
                    class="btn-os"
                    onClick={() => this.onDownload()}
                  />
                </i-hstack>
                <i-hstack id="groupBtnDeployElm" gap={10} margin={{ top: 10 }} verticalAlignment="center" horizontalAlignment="center" wrap="wrap">
                  <i-button
                    id="btnExport"
                    caption="Export JSON"
                    enabled={false}
                    width={200}
                    maxWidth="100%"
                    class="btn-os"
                    onClick={() => this.onDownload()}
                  />
                  <i-button
                    id="btnDeployExport"
                    caption="Deploy & Export JSON"
                    enabled={false}
                    width={300}
                    maxWidth="100%"
                    rightIcon={{ spin: true, visible: false, fill: '#FFFFFF' }}
                    class="btn-os"
                    onClick={this.onDeployBuyback}
                  />
                </i-hstack>
              </i-hstack>
            </i-vstack>
          </i-panel>
        </i-panel>
      </i-panel>
    )
  }
}
