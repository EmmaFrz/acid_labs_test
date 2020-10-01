import React from 'react';
import "../../../setupTest";
import { mount } from 'enzyme';
import Header from '../../../components/commons/header';

describe('<Footer />', () => {
    const header = mount(<Header />);
    test('Render del componente', () => {
        expect(header.length).toEqual(1);
    });
    test('Render del contenido', () => {
        expect(header.find(".header").text()).toEqual('');
    })
});