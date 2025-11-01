export type GenStatus = 'Approved' | 'Incomplete';
export type GenCategory = 'Alta' | 'Media' | 'Baja' | 'Refurbish';

export interface Gen {
  id: number;
  name: string;
  quality: number;
  status: GenStatus;
  selected: boolean;
  category: GenCategory;
}
