import { PercentAndIdTag } from '../percentAndIdTag';

export interface PoiInterface {
  readonly name: string;
  readonly price: string;
  readonly description: string;
  readonly address: string;
  readonly city: string;
  readonly postalCode: string;
  readonly long: string;
  readonly lat: string;
  readonly greenScore: number;
  readonly logo?: string;
  readonly type: string;
  readonly typeGreenScore: PercentAndIdTag[];
}
