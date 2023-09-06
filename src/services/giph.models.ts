export interface imageDetail {
  url: string;
}

export interface imageOption {
  downsized_still: imageDetail;
  '480w_still': imageDetail;
}

export interface GiphList {
  id: string;
  images: imageOption;
}
