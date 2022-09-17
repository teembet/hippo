export interface IContext {
  phone: string;
  setPhone: any;
  data: any;
  step: number;
  onChange: any;
  nextStep: () => void;
  prevStep: () => void;
}
