import React from 'react';
import "../../../setupTest";
import { mount } from 'enzyme';
import Footer from '../../../components/commons/footer';

describe('<Footer />', () => {
    const footer = mount(<Footer />);
    test('Render del componente', () => {
        expect(footer.length).toEqual(1);
    });
    test('Render del contenido', () => {
        expect(footer.find(".footer").text()).toEqual('Hecho por Emmanuel Franquiz, Octubre 2020');
    })
});