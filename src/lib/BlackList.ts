export default (chars: string[]): RegExp => {
   return new RegExp('^(?!.*(?:' + chars.join('|') + '))', 'g');
};
