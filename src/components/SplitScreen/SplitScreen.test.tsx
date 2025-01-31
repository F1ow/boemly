import React from 'react';
import { SplitScreen } from '.';
import { render, screen } from '../../test/testUtils';
import { SplitScreenProps } from './SplitScreen';

const defaultProps: SplitScreenProps = {
  left: 'left',
  right: 'right',
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<SplitScreen {...combinedProps} />);
};

describe('The SplitScreen component', () => {
  it('renders the left prop', () => {
    setup();

    expect(screen.getByText('left')).toBeInTheDocument();
  });

  it('renders the right prop', () => {
    setup();

    expect(screen.getByText('right')).toBeInTheDocument();
  });

  it('renders correct if the apportionment is changed', () => {
    setup({ apportionment: 60 });

    expect(screen.getByText('left')).toBeInTheDocument();
    expect(screen.getByText('right')).toBeInTheDocument();
  });

  describe('on mobile', () => {
    it('does not render the left part if hideLeftOnMobile is true', () => {
      setup({ mobileIsOpen: true, hideLeftOnMobile: true });

      expect(screen.queryByText('left')).toBeNull();
    });

    it('does render the left part (opened) if hideLeftOnMobile is false', () => {
      setup({ mobileIsOpen: true, hideLeftOnMobile: false });

      expect(screen.getByText('left')).toBeInTheDocument();
    });

    it('does render the left part (closed) if hideLeftOnMobile is false', () => {
      setup({ mobileIsOpen: false, hideLeftOnMobile: false });

      expect(screen.getByText('left')).toBeInTheDocument();
    });
  });
});
