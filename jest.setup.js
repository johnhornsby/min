import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import { TextEncoder, TextDecoder } from 'util';

global.React = React;
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
