const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    sampleActivity = null 
    || sampleActivity === ''
    || +sampleActivity > 15
    || +sampleActivity < 0
  ) return false;
  if (typeof (+sampleActivity) !== Number) return false;

  let result = Math.log(MODERN_ACTIVITY/strSampleActivity) * HALF_LIFE_PERIOD / 0.693;
  return result;
};
