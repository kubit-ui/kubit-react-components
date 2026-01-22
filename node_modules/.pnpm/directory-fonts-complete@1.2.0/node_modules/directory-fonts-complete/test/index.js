const expect  = require('chai').expect;
const directoryFonts = require('../index.js');

const expected = {
  'Fira Code': {
    variants: {
      '400': {
        normal: {
          local: [ 'FiraCode-Regular', 'FiraCode-Regular' ],
          url: {
            otf: '/fonts/FiraCode-Regular.otf',
            ttf: '/fonts/FiraCode-Regular.ttf',
            woff: '/fonts/FiraCode-Regular.woff'
          }
        }
      }
    }
  }
};

const expected_swapped = {
  'Fira Code': {
    variants: {
      'normal': {
        400: {
          local: [ 'FiraCode-Regular', 'FiraCode-Regular' ],
          url: {
            otf: '/fonts/FiraCode-Regular.otf',
            ttf: '/fonts/FiraCode-Regular.ttf',
            woff: '/fonts/FiraCode-Regular.woff'
          }
        }
      }
    }
  }
};

describe('directory-fonts-complete', function () {
  it('should meta information of fonts', function () {
    expect(directoryFonts('./test/fonts', '/fonts')).to.eql(expected);
  });
  it('should meta information of fonts with swapKeys option', function () {
    expect(directoryFonts('./test/fonts', '/fonts', true)).to.eql(expected_swapped);
  });
})
