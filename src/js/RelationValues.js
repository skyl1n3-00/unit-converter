import Relation from './RelationClass';

//Distance conversion
export const distance = [];
//Kilometer conversions
const kmToMeter = new Relation('km', 'm', 1000);
distance.push(kmToMeter);
const kmToDecimeter = new Relation('km', 'dm', 10000);
distance.push(kmToDecimeter);
const kmTomilimeter = new Relation('km', 'mm', 100000);
distance.push(kmTomilimeter);
//Decimeter conversions
const dmToKm = new Relation('dm', 'km', 1 / 10);
distance.push(dmToKm);
const dmToMetter = new Relation('dm', 'm', 10);
distance.push(dmToMetter);
const dmToMilimeter = new Relation('dm', 'mm', 1000);
distance.push(dmToMilimeter);
//Meter conversions
const meterToKm = new Relation('m', 'km', 1 / 1000);
distance.push(meterToKm);
const meterToDm = new Relation('m', 'dm', 1 / 10);
distance.push(meterToDm);
const meterTomilimeter = new Relation('m', 'mm', 1000);
distance.push(meterTomilimeter);
//Milimeter conversions
const milimeterToKm = new Relation('mm', 'km', 1 / 100000);
distance.push(milimeterToKm);
const milimterToMeter = new Relation('mm', 'm', 1 / 1000);
distance.push(milimterToMeter);
const milimeterToDecimter = new Relation('mm', 'dm', 1 / 100);

//Data conversions
export const data = [];
//Terabyte conversions
const tbTogb = new Relation('tb', 'gb', 1024);
data.push(tbTogb);
const tbToMb = new Relation('tb', 'mb', 1024 * 1024);
data.push(tbToMb);
//Gigabyte conversions
const gbToTb = new Relation('gb', 'tb', 1 / 1024);
data.push(gbToTb);
const gbToMb = new Relation('gb', 'mb', 1024);
data.push(gbToMb);
//Megabyte conversions
const mbToTb = new Relation('mb', 'tb', 1 / (1024 * 1024));
data.push(mbToTb);
const mbToGb = new Relation('mb', 'gb', 1 / 1024);
data.push(mbToGb);

//Weight conversions
export const weight = [];
//Kilogram conversions
const kilogramToGram = new Relation('kg', 'g', 1000);
weight.push(kilogramToGram);
const kilogramToPound = new Relation('kg', 'lb', 2.2046);
weight.push(kilogramToPound);
//Pound conversions
const poundToKilogram = new Relation('lb', 'kg', 1 / 2.2046);
weight.push(poundToKilogram);
const poundToGram = new Relation('lb', 'g', 453.95);
weight.push(poundToGram);
//Gram conversions
const gramToKilogram = new Relation('g', 'kg', 1 / 1000);
weight.push(gramToKilogram);
const gramToPound = new Relation('g', 'lb', 1 / 453.95);
weight.push(gramToPound);
