import * as React from 'react';
import { VisuallyHidden as VisuallyHiddenPrimitive } from 'radix-ui';

const VisuallyHidden = React.forwardRef(({ ...props }, ref) => <VisuallyHiddenPrimitive.Root ref={ref} {...props} />);

VisuallyHidden.displayName = 'VisuallyHidden';

export { VisuallyHidden };
