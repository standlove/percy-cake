import { PROPERTY_VALUE_TYPES, appPercyConfig } from 'config';
    ctx.store.next(new PageLoadSuccess({ environments: ['dev'] }));
  it('should reset app percy config when component destory', () => {
    appPercyConfig['key1'] = 'value1';
    appPercyConfig['key2'] = 'value2';

    ctx.component.ngOnDestroy();

    expect(appPercyConfig).toEqual({});
  });
