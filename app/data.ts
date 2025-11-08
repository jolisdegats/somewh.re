import { Location } from './types';
import { YemenSocotraIsland } from './data/yemen-socotra-island';
import { EthiopiaDanakilDesert } from './data/ethiopia-danakil-desert';
import { BoliviaSalarDeUyuni } from './data/bolivia-salar-de-uyuni';
import { NorwaySvalbard } from './data/norway-svalbard';
import { MadagascarMadagascar } from './data/madagascar-madagascar';
import { getDayOfYear } from './_utils/getDayOfYear';

// Import all locations
export const SAMPLE_LOCATIONS: (Location & { id: string })[] = [
  { id: '1', ...YemenSocotraIsland },
  { id: '2', ...EthiopiaDanakilDesert },
  { id: '3', ...BoliviaSalarDeUyuni },
  { id: '4', ...NorwaySvalbard },
  { id: '5', ...MadagascarMadagascar },
  //
  //
  { id: String(getDayOfYear(new Date())), ...BoliviaSalarDeUyuni }, // for testing
];
