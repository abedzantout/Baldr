/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

export function convertToBoolProperty( val: any ): boolean {
  if ( typeof val === 'string' ) {
    val = val.toLowerCase().trim();
    
    return (val === 'true' || val === '');
  }
  
  return !!val;
}
