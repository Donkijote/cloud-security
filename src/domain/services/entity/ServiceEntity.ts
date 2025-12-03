export type ServiceSection = {
  imgUrl: string;
  title: string;
  description: string;
};

export type Service = {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  heroUrl: string;
  sections: Array<ServiceSection>;
};
