/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import {MDCFoundation} from '@material/base/foundation';
import {MDCTextFieldCharacterCounterAdapter} from './adapter';
import {cssClasses, strings} from './constants';

export class MDCTextFieldCharacterCounterFoundation extends MDCFoundation<MDCTextFieldCharacterCounterAdapter> {
  static override get cssClasses() {
    return cssClasses;
  }

  static override get strings() {
    return strings;
  }

  /**
   * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
   */
  static override get defaultAdapter(): MDCTextFieldCharacterCounterAdapter {
    return {
      setContent: () => undefined,
      setCounterValue: () => undefined,
    };
  }

  constructor(adapter?: Partial<MDCTextFieldCharacterCounterAdapter>) {
    super({...MDCTextFieldCharacterCounterFoundation.defaultAdapter, ...adapter});
  }

  setCounterValue(currentLength: number, maxLength: number) {
    currentLength = Math.min(currentLength, maxLength);
    this.adapter.setContent(`${currentLength} / ${maxLength}`);
    this.adapter.setCounterValue(currentLength, maxLength);
  }
}

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCTextFieldCharacterCounterFoundation;
