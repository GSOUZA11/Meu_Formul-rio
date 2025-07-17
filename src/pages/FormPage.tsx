import React from 'react';
import { Box } from '../components/Box';
import { Divider } from '../components/Divider';
import { Steps } from '../components/Steps';
import { Input } from '../components/Input';
import { Textarea } from '../components/Textarea';
import { Button } from '../components/Button';

const FormPage = () => {
  const steps = [
    { nome: 'Contato', ordem: 1 },
    { nome: 'Empresa', ordem: 2 },
    { nome: 'Projeto', ordem: 3 },
  ];
  const currentStep = 2;

  return (
    <Box>
      <Steps steps={steps} current={currentStep} />
      <Divider />
      <Input label="Nome da Empresa *" placeholder="Informe o nome da empresa" />
      <Input label="Nº de Funcionários" placeholder="Informe o número de funcionários" />
      <Textarea label="Sobre seu negócio" placeholder="Fale um pouco sobre seus produtos e serviços" colunas={100} ehExpandivel={true} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
        <Button texto="VOLTAR" temBackground={false} />
        <Button texto="CONTINUAR" temBackground={true} />
      </div>
    </Box>
  );
};

export default FormPage;
