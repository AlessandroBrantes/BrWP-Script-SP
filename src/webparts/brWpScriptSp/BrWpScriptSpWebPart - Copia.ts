import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-property-pane';

import styles from './BrWpScriptSpWebPart.module.scss';

export interface IBrWpScriptSpWebPartProps {
  scriptCode: string;
}

export default class BrWpScriptSpWebPart extends BaseClientSideWebPart<IBrWpScriptSpWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `<div class="${ styles.brWpScriptSp }">
                                  <script type="text/javascript">
                                    ${this.properties.scriptCode}
                                  </script>
                                </div>`;
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: { description: "Personalize a sua Web Part" },
          groups: [
            {
              groupName: "Configurações personalizadas",
              groupFields: [
                PropertyPaneTextField('scriptCode', {
                  label: "Código do Script"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

