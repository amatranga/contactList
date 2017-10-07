export class Contact {
  constructor(
    public name: string,
    public id: number,
    public companyName: string,
    public isFavorite: boolean,
    public smallImageUrl: string,
    public largeImageUrl: string,
    public emailAddress: string,
    public birthDate: string,
    public phoneWork: string,
    public phoneHome: string,
    public phoneMobile: string,
    public addressStreet: string,
    public addressCity: string,
    public addressState: string,
    public addressCountry: string,
    public addressZipCode: string
    ) {}
}
