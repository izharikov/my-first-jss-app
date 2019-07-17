// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the Header component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'Header',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'pageTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'navigationLinks', type: CommonFieldTypes.ContentList },
      { name: 'singleLink', type: CommonFieldTypes.GeneralLink },
      { name: 'headerLogo', type: CommonFieldTypes.Image },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
