export interface IPackage {
  name: string,
  url: string,
  description: string
}

export interface IPackages extends Array<IPackage>{}