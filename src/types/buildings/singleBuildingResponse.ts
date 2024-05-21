export interface GetSingleBuildingResponse {
  id: number;
  title: string;
  address: string;
  city: string;
  zipcode: string;
  description: string;
  estimatedCost: number;
  estimatedArea: number;
  date: string;
  userId: number;
  booking: {
    id: number;
    deadline: string;
    buildingId: number;
    contractorId: null | number;
  };
  user: {
    id: number;
    email: string;
    phone: string;
  };
}
