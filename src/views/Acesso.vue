<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
    <div id="backGround d-block w-100" style="background-image: url('https://unimar.br/abertura/img/universo.jpg');" class="d-block w-100">
        <!-- Conteúdo do seu componente Vue aqui -->
        <div class="outer">
            <h3>Vue Teleport Example</h3>
            <div>
                <MyModal />
            </div>
        </div>

        <button @click="open = true">Abrir modal</button>
        <Teleport to="modals">
            <div v-if="open" class="modal">
                <p>Hello from the modal!</p>
                <button @click="open = false">Close</button>
            </div>
        </Teleport>

        <div class="modal" tabindex="-1" id="modals">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* BackGround */
#backGround {
   position: fixed;
   width: 100%;
   height: 700px;
   background-size: cover;
}

.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
