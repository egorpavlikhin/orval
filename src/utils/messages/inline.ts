import {InfoObject} from 'openapi3-ts';
import {getPackage} from '../packages';

const {name: packageName, version: packageVersion} = getPackage();

export const getFilesHeader = ({title, description, version}: InfoObject) =>
  `/*\n* Generated by ${packageName} v${packageVersion} 🍺\n* Do not edit manually.\n${
    title ? `* ${title}\n` : ''
  }${description ? `* ${description}\n` : ''}${
    version ? `* OpenAPI spec version: ${version}` : ''
  }\n*/\n`;
