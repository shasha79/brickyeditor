import { bre } from '@/types/bre';
import { FIELD_DATA_ATTR } from '@/constants';

export const isValidFieldType = <TResult extends bre.field.FieldData>(
  data: bre.field.FieldData,
  type: string
): data is TResult => data.type === type;

export const updateFieldData = <TData extends bre.field.FieldData>(
  field: bre.field.Field<TData>,
  changes: {
    [TProp in keyof TData]?: TData[TProp];
  }
) => {
  const { data } = field;

  // TODO: deep compare?
  const props = Object.keys(changes) as Array<keyof TData>;
  const hasChanges = props.some(p => data[p] !== changes[p]);

  if (hasChanges) {
    field.data = {
      ...data,
      ...changes,
    };
  }
};

export const getCleanFieldElement = ($field: HTMLElement) => {
  const $el = $field.cloneNode(true) as HTMLElement;
  $el.attributes.removeNamedItem(FIELD_DATA_ATTR);
  return $el;
};
