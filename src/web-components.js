import React from 'react';
import * as addons from '@storybook/addons';
import * as coreEvents from '@storybook/core-events';
import * as addonDocsBlocks from '@storybook/addon-docs/blocks.js';
import { registerPreviewEntry } from './registerPreviewEntry.js';

export { React, coreEvents, addons, registerPreviewEntry, addonDocsBlocks };

export {
  storiesOf,
  setAddon,
  addDecorator,
  addParameters,
  configure,
  getStorybook,
  forceReRender,
  raw,
} from '@storybook/web-components';
