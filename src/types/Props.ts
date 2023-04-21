export interface HeaderProps {
  title: string;
}

export interface CountryProps {
  countryName: string;
  population: string;
}

export interface StatPanelProps {
  panelName: string;
  panelValue: string;
  panelValueColor?: string;
}

export interface StatPanelTodayProps {
  panelName: string;
  panelValue: string;
  panelValueColor?: string;
}

export interface DataLastUpdatedProps {
  dataLastUpdated: number;
}

export interface ChartProps {
  country: string;
}
