import { Period } from './components/Panels/PeriodPanelControl';
import { YearStat } from './components/Panels/YearsStatPanelControl';
import { LayerExtent } from '@nextgis/webmap';
import { Marker } from 'mapbox-gl';

export interface AreaStat {
  year: number;
  area: number;
  plus?: number;
  minus?: number;
}

export interface AppOptions {
  baseUrl?: string;
  target: string;
  fromYear?: number;
  currentYear?: number;
  animationStep?: number;
  animationDelay?: number;
  bounds?: LayerExtent;
  periods?: Period[];
  yearsStat?: YearStat[];
  areaStat?: AreaStat[];
  version?: string;
  lineColor?: Array<[number, string]>;
  /** self id, color, label, array of link to lineColor id */
  lineColorLegend?: Array<[number, string, string, number[]]>;
  statusAliases?: { [name: string]: string };
}

export interface HistoryLayerProperties {
  cat: number;
  fid: number;
  id: number;
  linecomnt: string;
  lwdate: string;
  lwdtappr: number;
  status: number;
  updtappr: number;
  updtrl: string;
  upperdat: string;
  Area: number;
}

export interface LayerMeta {
  name: string;
  from: number;
  to: number;
  id: number;
}

export interface PointMeta {
  name: string;
  year: number;
  month: number;
  day: number;
  id: string;
}

export interface PointProperties {

  areasum: number;
  count: number;
  ident: number;
  numb: number;
  row_number: number;
  status: number;
  year: number;

  // status: number; // 6
  // lwdate: string; // 1945-06-29,
  // lwdtappr: number; // 0,
  // srcdata: any;
  // upperdat: string; // 1946-06-29,
  // eventstart: string; // по договору СССР с Чехословакией Украинской ССР передана Закарпатская область,
  // cat: number; // 342,
  // fid: number; // 547,
  // updtrl: any;
  // linecomnt: string; // Передача СССР Кенигсберга,
  // updtappr: any;
  // name: any;
  // numb?: number;
}

export interface AppMarkerMem {
  marker: Marker;
  element: HTMLElement;
  properties: PointProperties;
}
