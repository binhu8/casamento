#include <stdio.h>


int main(void){
  int vetor[16];
    int graos = 1, soma = 1; 
       for (int i = 1; i <= 16; i++)
       if(i>1)     
            graos = graos * 2,
            soma = soma + graos,
            printf("%d ", graos);  
        else
            printf("%d ", graos); 
       
        printf("soma: %d", soma);
}