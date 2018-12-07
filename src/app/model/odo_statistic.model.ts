export class OdoStatistic {
  public unitId: number;
  public errorCode: string;
  public intervals: [{'beginMileageKm': {'value': number, 'noValueReason': string}, 'endMileageKm': {'value': number,
      'noValueReason': string}, 'totalMileageKm':  {'value': number, 'noValueReason': string}, 'begin': Date, 'end': Date}];
}
