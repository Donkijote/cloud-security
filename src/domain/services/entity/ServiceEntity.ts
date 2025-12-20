import type { LocalizedText } from "@/domain/services/entity/I18nEntity";

export type ServiceSection = {
  imgUrl: string;
  title: LocalizedText;
  description: LocalizedText;
};

export type Service = {
  id: string;
  imgUrl: string;
  title: LocalizedText;
  description: LocalizedText;
  heroUrl: string;
  sections: Array<ServiceSection>;
};
