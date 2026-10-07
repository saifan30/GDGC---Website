export interface AboutAssetConfig {
  campusCollaborationImage: {
    image: string;
    placeholderImage: string;
    alt: string;
  };
}

export const aboutData: AboutAssetConfig = {
  campusCollaborationImage: {
    image: '/images/about/campus-collaboration.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    alt: 'GDGC AIKTC members collaborating on campus'
  }
};
