import React, {Component} from 'react';

import {mapSection} from '../showcase-components/showcase-utils';
import {showCase} from '../index';
const {
  AxisOn0,
  AxisWithTurnedLabels,
  CustomAxes,
  CustomAxisChart,
  CustomAxesOrientation,
  DecorativeAxisCrissCross,
  DynamicComplexEdgeHints,
  DynamicCrosshair,
  DynamicCrosshairScatterplot,
  DynamicHints,
  DynamicProgrammaticRightEdgeHints,
  DynamicSimpleEdgeHints,
  DynamicSimpleTopEdgeHints,
  PaddedAxis,
  ParallelCoordinatesExample,
  StaticCrosshair,
  StaticHints
} = showCase;

/* eslint-disable max-len */
const AXES = [{
  name: 'Axis on 0',
  component: AxisOn0
}, {
  name: 'Custom Axes Orientation',
  component: CustomAxesOrientation
}, {
  name: 'Custom Axis',
  component: CustomAxisChart
}, {
  name: 'Even more Custom Axes',
  component: CustomAxes
}, {
  name: 'Turned axis labels',
  component: AxisWithTurnedLabels
}, {
  name: 'Unpadded Axis vs Padded Axis',
  component: PaddedAxis
}];

const TOOLTIPS = [{
  name: 'Static Hints',
  component: StaticHints
}, {
  name: 'Dynamic Hints',
  comment: 'Move mouse over the point to see the hint.',
  component: DynamicHints
}, {
  name: 'Dynamic Simple Edge Hints',
  comment: 'Mouse over point. Hint appears on different edges. Left margin enables first point to show w/o break.',
  component: DynamicSimpleEdgeHints
}, {
  name: 'Dynamic Simple Top Edge Hints',
  comment: 'Mouse over point. horizontalAlign=ALIGN.AUTO, verticalAlign=ALIGN.TOP_EDGE  Hint pinned to top edge, pole moves along edge, hint box on right of pole for first 2 data points and left otherwise.',
  component: DynamicSimpleTopEdgeHints
}, {
  name: 'Dynamic Programmatic Right Edge Hints',
  comment: 'Mouse over point. getAlignStyle method returns style object with right and top CSS props set (pinned right edge and at y position)',
  component: DynamicProgrammaticRightEdgeHints
}, {
  name: 'Dynamic Complex Edge Hints',
  comment: 'Mouse over point. Hint uses flex, css to show hint and pole from point to outside plot edge (css for margin values).',
  component: DynamicComplexEdgeHints
}, {
  name: 'Static Crosshair',
  component: StaticCrosshair
}, {
  name: 'Dynamic Crosshair',
  comment: 'Move your mouse over the chart to see the point.',
  component: DynamicCrosshair
}, {
  name: 'Dynamic Crosshair Scatterplot',
  comment: 'Move your mouse over the chart to see the point.',
  component: DynamicCrosshairScatterplot
}];
/* eslint-enable max-len */
const DECORATIVE_AXES = [{
  name: 'Diagonal Axes',
  component: DecorativeAxisCrissCross
}, {
  name: 'Parallel Coordinates',
  component: ParallelCoordinatesExample
}];

class AxesShowcase extends Component {
  render() {
    return (
      <article id="axes">
        <h2>Axes</h2>
        {AXES.map(mapSection)}
        <h2>Tooltips</h2>
        {TOOLTIPS.map(mapSection)}
        <h2>DecorativeAxis</h2>
        {DECORATIVE_AXES.map(mapSection)}
      </article>
    );
  }
}

export default AxesShowcase;