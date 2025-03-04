// Filas

// As filas (queues) sao estruturas de dados muito semelhantes as pilhas, mas, em vez de LIFO(last in, first out), elas seguem a ordem FIFO(first in, first out).

// Uma fila é uma colecao ordenada de itens baseada em FIFO(First In, First Out, isto é, o primeiro que entra é o primeiro que sai), tambem conhecido como principio do first-come first-served. A adicao de novos elementos em uma fila é feita na cauda(tail), e a remocao, na frente. O elemento mais recente adicionado na fila deve esperar no final dela.

// O exemplo mais conehcido de uma fila na vida real é a a tipica fila que se forma ocasionalmente.

// Temos filas no cinema, na lanchonete e no caixa de um supermercado, por exemplo. A primeira pessoa que estiver na fila sera a primeira a ser atendida.

// Um exemplo muito conhecido em ciencia da computacao é a fila de impressao. Suponha que precisamos imprimir cinco documentos. Abrimos cada um dos documentos e clicamos no botao para imprimir. Cada um sera enviado para a fila da impressora. O primeiro documentopara o qual solicitamos a impressao antes, e assim por diante, ate que todos tenham sido impressos.

// Deques

// A estrutura de dados de deque, tambem conhecida como fila de duas pontas(double-ended queue), é uma fila especial que nos permite inserir e remover elementos do final ou da frente da fila.

// Um exemplo de um deque na vida real é a tipica fila em cinemas, lanchonetes e assim por diante. Por exemplo, uma pessoa que acabou de comprar um ingresso poderia retornar para a frente da fila somente para perdir uma informacao rapida. Se a pessoa que estiver no final da fila estiver com pressa, ela poderia tambem sair da fila.

// Em ciencia da computacao, uma apliaccao comum de um deque é na armazenagem de uma lista de operacoes para desfazer acoes(undo). Sempre que um usuario executar uma operacao no software, um push dessa operacao sera feito no deque(exatamente como em uma pilha). Quando o usuario clicar no botao Undo(desfazer), uma operacao de pop sera efetuada no deque, o que significa que essa operacao sera removida do final. Depois de um numero predefinido de operacoes, as operacoes mais antigas serao removidas da frente do deque. Como o deque implementa os principios tanto de FIFO tanto de LIFO, podemos dizer tambem que o deque combina as estruturas de dados de fila e pilha.
