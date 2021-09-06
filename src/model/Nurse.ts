export class Nurse {
  id?: number
  name?: string
  company?: string
  location?: string
  date?: Date
  major?: string
  match?: number
  price?: string

  discipline?: string
  specialty?: string
  startDate?: Date
  endDate?: Date
  duration?: number
  shiftPerWeek?: number
  hourPerWeek?: number
  license?: string
  licenseState?: string
  certification?: string

  constructor(
    id?: number, name?: string, location?: string, date?: Date, major?: string, match?: number, price?: string,
    discipline?: string, specialty?: string, startDate?: Date, endDate?: Date, duration?: number, shiftPerWeek?: number,
    hourPerWeek?: number, license?: string, licenseState?: string, certification?: string
  ) {
    if (id) { this.id = id };
    if (name) { this.name = name };
    if (location) { this.location = location };
    if (date) { this.date = date };
    if (major) { this.major = major };
    if (match) { this.match = match };
    if (price) { this.price = price };

    if (discipline) { this.discipline = discipline };
    if (specialty) { this.specialty = specialty };
    if (startDate) { this.startDate = startDate };
    if (endDate) { this.endDate = endDate };
    if (duration) { this.duration = duration };
    if (shiftPerWeek) { this.shiftPerWeek = shiftPerWeek };
    if (hourPerWeek) { this.hourPerWeek = hourPerWeek };
    if (license) { this.license = license };
    if (licenseState) { this.licenseState = licenseState };
    if (certification) { this.certification = certification };
  }
}
