import React from 'react';
import { Field } from 'formik';
import { ErrorText } from '../../text/ErrorText';
import { DefaultInput } from '../../ui-inputs/DefaultInput';

export const InnerForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    dirty
}) => {

    return (
        <form onSubmit={handleSubmit}>
            <DefaultInput label="Email">
                <Field type="email" name="email" className="form-control" />
                {touched.email && errors.email && <ErrorText>{errors.email}</ErrorText>}
            </DefaultInput>

            <DefaultInput label="Password">
                <Field type="password" name="password" className="form-control" />
            </DefaultInput>

            <button className="btn btn-default mt-4" type="submit" disabled={!dirty || isSubmitting || Object.keys(errors).length}>   Submit  </button>
        </form>

    );
}