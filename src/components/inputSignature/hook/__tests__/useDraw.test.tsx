import { act, renderHook } from '@testing-library/react-hooks';

import { useDraw } from '../useDraw';

describe('useDraw', () => {
  it('should return a canvas ref, canvas data, resetCanvas function, and setSignatureStyles function', () => {
    const { result } = renderHook(() => useDraw());

    // Comprobar que se devuelve un objeto con las propiedades correctas
    expect(result.current).toHaveProperty('canvasRef');
    expect(result.current).toHaveProperty('filled');
    expect(result.current).toHaveProperty('resetCanvas');
    expect(result.current).toHaveProperty('setSignatureStyles');
  });

  it('should reset canvas data when resetCanvas is called', () => {
    const { result } = renderHook(() => useDraw());

    act(() => {
      result.current.setSignatureStyles();
      result.current.resetCanvas();
    });

    expect(result.current.filled).toBeFalsy();
  });
  it('should setSiganture with value', () => {
    const { result } = renderHook(() => useDraw());

    act(() => {
      result.current.setSignatureStyles({ color: 'black', lineWidth: 2 });
      result.current.resetCanvas();
    });

    expect(result.current.filled).toBeFalsy();
  });
});
