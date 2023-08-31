import { StaticImageData } from "next/image";

export interface Product {
  img: StaticImageData;
  id: string;
  title: string;
  location: string;
  time: string;
  date: string;
}