export interface IContext {
  phone: string;
  setPhone: any;
  data: any;
  startDate: any;
  setStartDate: any;
  step: number;
  onChange: any;
  nextStep: () => void;
  prevStep: () => void;
}
