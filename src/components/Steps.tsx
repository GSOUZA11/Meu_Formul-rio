import React from 'react';
type Step = {
  nome: string;
  ordem: number;
};
type StepsProps = {
  steps: Step[];
  current: number;
};
export const Steps = ({ steps, current }: StepsProps) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
    {steps.map((step) => {
      const isCompleted = current > step.ordem;
      const isActive = current === step.ordem;
      return (
        <div key={step.ordem} style={{ textAlign: 'center', flex: 1 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: isActive ? '#7c3aed' : isCompleted ? 'green' : '#e0e0e0',
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 auto',
              marginBottom: 4,
              fontWeight: 'bold',
            }}
          >
            {isCompleted ? '✔' : step.ordem}
          </div>
          <span
            style={{
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? '#7c3aed' : '#666',
              fontSize: 14,
            }}
          >
            {step.nome}
          </span>
        </div>
      );
    })}
  </div>
);