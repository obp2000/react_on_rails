import { createSelector } from 'reselect'
import {formValueSelector} from 'redux-form'

const DensitySelector = state => formValueSelector('product')(state, 'density')
const WidthSelector = state => formValueSelector('product')(state, 'width')
const WeightForCountSelector = state => formValueSelector('product')(state, 'weight_for_count')
const LengthForCountSelector = state => formValueSelector('product')(state, 'length_for_count')
const WeightSelector = state => formValueSelector('product')(state, 'weight')

export const DensityForCountSelector = createSelector(
    WeightForCountSelector,
    LengthForCountSelector,
    WidthSelector,
    (weight_for_count, length_for_count, width) => weight_for_count / length_for_count / width * 100
)

export const MetersInRollSelector = createSelector(
    WeightSelector,
    DensitySelector,
    WidthSelector,
    (weight, density, width) => weight * 100000 / density / width
)
