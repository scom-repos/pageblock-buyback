import { Styles } from '@ijstech/components';

Styles.cssRule('.panel-config', {
  background: "#192046",
  padding: '1rem',
  margin: 'auto',
  $nest: {
    '.modal': {
      width: 800,
      maxWidth: '100%',
      borderRadius: '1rem',
      padding: '1.5rem 1rem',
    },
    'i-button': {
      padding: '6px 12px',
      textAlign: 'center',
    },
    '.pnl-label': {
      $nest: {
        'i-icon': {
          display: 'none',
          cursor: 'pointer'
        },
        '&:hover i-icon': {
          display: 'block',
        },
      }
    },
    '.btn-item': {
      background: `#f50057 !important`,
      borderRadius: 0,
      color: '#FFFFFF',
      $nest: {
        '&.btn-active': {
          background: `#F15E61 !important`,
          cursor: 'default',
        }
      }
    },
    '.w-input': {
      width: 'calc(100% - 180px) !important',
    },
    'input': {
      $nest: {
        '&::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0',
        },
        '&::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0',
        },
        '&:focus::placeholder': {
          opacity: 0,
        }
      }
    },
    '.input-area': {
      height: '80px !important',
      borderRadius: 12,
      padding: 8,
      background: "#0C1234",
      $nest: {
        'textarea': {
          width: '100% !important',
          height: '100% !important',
          background: 'transparent',
          boxShadow: 'none',
          outline: 'none',
          border: 'none',
          color: '#FFFFFF',
          fontSize: '1rem',
        }
      }
    },
    '.input-text': {
      height: '40px !important',
      borderRadius: 12,
      paddingInline: 8,
      background: "#0C1234",
      $nest: {
        '&.w-100': {
          width: '100% !important',
        },
        input: {
          border: 'none',
          width: '100% !important',
          height: '100% !important',
          backgroundColor: 'transparent',
          color: '#FFFFFF',
          fontSize: '1rem',
          textAlign: 'left'
        },
      }
    },
    '.main-content': {
      $nest: {
        '.lb-title ': {
          color: '#fff'
        },
      }
    },
    '#lbMinLockTime': {
      opacity: 0.8
    },
    'token-selection.disabled #btnToken': {
      cursor: 'default !important',
    },
    '.network-selection': {
      $nest: {
        '.btn-select:hover': {
          background: `rgba(0, 0, 0, 0.54) !important`,
        },
        '.btn-select.disabled': {
          color: `#fff !important`,
          cursor: 'default !important',
        },
        '.modal': {
          padding: '0.75rem 0',
          background: '#0C1234',
          borderRadius: 6,
          border: `1px solid #2c387e`,
          $nest: {
            '& > i-vstack': {
              maxHeight: '40vh',
              overflow: 'auto',
            },
            'i-button': {
              boxShadow: 'none',
              color: '#FFFFFF'
            },
            'i-button:hover': {
              background: `linear-gradient(254.8deg, rgba(231,91,102,.1) -8.08%, rgba(181,32,130,.1) 84.35%) !important`,
            },
          },
        },
      },
    },
    '.cursor-pointer': {
      cursor: 'pointer',
    },
    '&.custom-scroll *': {
      $nest: {
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar': {
          width: '5px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#F15E61',
          borderRadius: '5px',
        }
      }
    },
    '#loadingElm.i-loading--active': {
      marginTop: '2rem',
      position: 'initial',
      $nest: {
        '.i-loading-spinner': {
          marginTop: '2rem',
        },
      },
    },
    '@media screen and (max-width: 525px)': {
      $nest: {
        '.main-content': {
          $nest: {
            '.w-input': {
              width: '100% !important'
            },
            '.row-mobile': {
              flexWrap: 'nowrap',
              $nest: {
                '.lb-title': {
                  whiteSpace: 'nowrap',
                }
              }
            },
            '.network-selection': {
              $nest: {
                'i-button': {
                  maxWidth: 'inherit !important',
                },
                'i-modal': {
                  width: '100%',
                  maxWidth: 'inherit !important',
                  $nest: {
                    '.modal': {
                      background: '#192046',
                      maxWidth: 'inherit !important',
                    }
                  }
                }
              }
            },
            'i-hstack': {
              flexWrap: 'wrap',
            },
          }
        }
      }
    }
  }
})