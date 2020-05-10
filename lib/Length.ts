export default (min: number, max: number): RegExp => {
   return new RegExp('^.{' + min + ',' + max + '}$');
};
