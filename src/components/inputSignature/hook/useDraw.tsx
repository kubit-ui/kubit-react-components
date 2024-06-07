import { useEffect, useRef } from 'react';

import { InputSignatureLineStyles } from '../types/inputSignatureTheme';

type ReturnType = {
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
  filled: boolean;
  resetCanvas: () => void;
  setSignatureStyles: (signatureStyles?: InputSignatureLineStyles) => void;
};

function isImageDataEqual(a: ImageData, b: ImageData) {
  if (a.width !== b.width || a.height !== b.height) {
    return false;
  }
  for (let i = 0; i < a.data.length; i++) {
    if (a.data[i] !== b.data[i]) {
      return false;
    }
  }
  return true;
}

export const useDraw = (onChange?: (value: string) => void): ReturnType => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const context =
    useRef<CanvasRenderingContext2D>() as React.MutableRefObject<CanvasRenderingContext2D>;
  const isDrawing = useRef<boolean>(false);
  const isFilled = useRef<boolean>(false);
  const signatureStylesRef = useRef<InputSignatureLineStyles>({ color: 'black', lineWidth: 2 });
  const canvasInnerData = useRef<ImageData | null>(null); // reference to the canvas data before drawing

  const resetCanvas = () => {
    if (!canvasRef.current) {
      return;
    }
    isFilled.current = false;
    context.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const setSignatureStyles = (signatureStyles?: InputSignatureLineStyles) => {
    if (!signatureStyles) {
      return;
    }
    signatureStylesRef.current.color = signatureStyles.color;
    signatureStylesRef.current.lineWidth = signatureStyles.lineWidth;
  };

  const startDrawing = event => {
    let offsetX, offsetY;

    if (event.type === 'touchstart' && canvasRef.current) {
      const { touches } = event;
      const { clientX, clientY } = touches[0];
      const { left, top } = canvasRef.current.getBoundingClientRect();
      offsetX = clientX - left;
      offsetY = clientY - top;
    } else {
      offsetX = event.offsetX;
      offsetY = event.offsetY;
    }

    canvasInnerData.current = context.current.getImageData(
      0,
      0,
      canvasRef.current?.width as number,
      canvasRef.current?.height as number
    );

    context.current.beginPath();
    context.current.moveTo(offsetX, offsetY);
    isDrawing.current = true;
  };

  const draw = event => {
    if (!isDrawing.current) return;
    let offsetX, offsetY;
    event.preventDefault();

    if (event.type === 'touchmove' && canvasRef.current) {
      const { touches } = event;
      const { clientX, clientY } = touches[0];
      const { left, top } = canvasRef.current.getBoundingClientRect();
      offsetX = clientX - left;
      offsetY = clientY - top;
    } else {
      offsetX = event.offsetX;
      offsetY = event.offsetY;
    }

    context.current.lineTo(offsetX, offsetY);
    context.current.stroke();
  };

  const stopDrawing = () => {
    const currentLayout = context.current.getImageData(
      0,
      0,
      canvasRef.current?.width as number,
      canvasRef.current?.height as number
    );

    context.current.closePath();
    isDrawing.current = false;

    if (!canvasInnerData.current) {
      return;
    }
    const isEqual = isImageDataEqual(currentLayout, canvasInnerData.current as ImageData);
    if (!isEqual) {
      const dataUrl = canvasRef.current?.toDataURL() as string;
      onChange?.(dataUrl);
      isFilled.current = true;
    }
  };

  useEffect(() => {
    if (canvasRef.current === null) {
      return;
    }

    const canvas = canvasRef.current;
    context.current = canvas?.getContext('2d', {
      willReadFrequently: true,
    }) as CanvasRenderingContext2D;

    if (!context.current) {
      return;
    }

    // Configuración del estilo del trazo
    context.current.strokeStyle = signatureStylesRef.current.color;
    context.current.lineWidth = signatureStylesRef.current.lineWidth;
    context.current.lineCap = 'round';
    context.current.lineJoin = 'round';

    // Añadir event listeners al canvas
    canvas?.addEventListener('mousedown', startDrawing);
    canvas?.addEventListener('mousemove', draw);
    canvas?.addEventListener('mouseup', stopDrawing);
    canvas?.addEventListener('mouseleave', stopDrawing);
    canvas?.addEventListener('touchstart', startDrawing);
    canvas?.addEventListener('touchmove', draw, { passive: false });
    canvas?.addEventListener('touchend', stopDrawing);

    return () => {
      // Limpiar event listeners al desmontar el componente
      canvas?.removeEventListener('mousedown', startDrawing);
      canvas?.removeEventListener('mousemove', draw);
      canvas?.removeEventListener('mouseup', stopDrawing);
      canvas?.removeEventListener('mouseleave', stopDrawing);
      canvas?.removeEventListener('touchstart', startDrawing);
      canvas?.removeEventListener('touchmove', draw);
      canvas?.removeEventListener('touchend', stopDrawing);
    };
  }, []);

  return {
    canvasRef,
    filled: isFilled.current,
    resetCanvas,
    setSignatureStyles,
  };
};
