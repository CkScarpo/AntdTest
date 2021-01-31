import { CloseOutlined } from "@ant-design/icons";
import { Menu, Modal, Row, Select } from "antd";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import SubMenu from "antd/lib/menu/SubMenu";
import React, { useState } from "react";
import 'antd/dist/antd.css';

//import './menu.css';

export default function MenuDWF() {

    const [isModal1Visible, setIsModalVisible] = useState(false);

    const [isModal2Visible, setIsModal2Visible] = useState(false);

    const showModal1 = () => {
        setIsModalVisible(true);
    };
    
    const showModal2 = () => {
        setIsModal2Visible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        setIsModal2Visible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setIsModal2Visible(false);
    };

    const Option = Select.Option;

    return <>
        <Header className="menu">
            <Row>
                <Menu
                    theme="dark"
                    mode="horizontal"
                >
                <SubMenu key="sub1" title="Tabelas">
                    <Menu.Item key="1" onClick={showModal1}>
                    Abrir tabela
                    </Menu.Item>
                    <Menu.Item key="2" onClick={showModal2}>
                    Nova Tabela
                    </Menu.Item>
                    <Menu.Item key="3">Gerenciar Tabelas</Menu.Item>
                    <Menu.Item key="4">Importar Tabela XML</Menu.Item>
                    <Menu.Item key="5">Importar Tabela Banco de Dados</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="Instâncias">
                    <Menu.Item key="6">Abrir instância</Menu.Item>
                    <Menu.Item key="7">Nova instância</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title="Telas">
                    <Menu.Item key="8">Abrir tela</Menu.Item>
                    <Menu.Item key="9">Nova tela</Menu.Item>
                </SubMenu>
                </Menu>
            </Row>
      </Header>
      <Modal 
            title="Pesquisa"
            centered 
            visible={isModal1Visible}  
            onOk={handleOk} 
            okText="Posicionar"
            onCancel={handleCancel}
            cancelText="Cancelar"
            maskClosable={false}
            closable={true}
            destroyOnClose={true}
            closeIcon={<CloseOutlined />}
            keyboard={true}
        >
            <Layout>
            <Content style={{ fontSize: 15, padding: '0 60px' }}>
                <Row>
                Campo:
                <Select defaultValue="Tabela" >
                    <Option value="Tabela">Tabela</Option>
                    <Option value="Inscrição">Inscrição</Option>
                </Select>    
                </Row>
                <Row className="inputPesquisa">
                Inicio:
                <input />
                <button>Pesquisar</button>
                </Row>
                <div style={{ background: '#fff', padding: 15, minHeight: 280 }}>   
                </div>
            </Content>
            </Layout>
            Quantidade de registros:
        </Modal>
        <Modal 
            title="Pesquisa"
            centered 
            visible={isModal2Visible}  
            onOk={handleOk} 
            okText="Posicionar"
            onCancel={handleCancel}
            cancelText="Cancelar"
            maskClosable={false}
            closable={true}
            destroyOnClose={true}
            closeIcon={<CloseOutlined />}
            keyboard={true}
        >
            teste
        </Modal>
    </>
}