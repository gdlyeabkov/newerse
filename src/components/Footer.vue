<template>
    <div>
        <hr/>
        <div class="footer">
            <div class="footerColumns">
                <div class="footerColumn">
                    <span class="footerLink">
                        Как работают новости
                    </span>
                    <span class="footerLink">
                        Информация для СМИ
                    </span>
                    <span class="footerLink">
                        База данных СМИ
                    </span>
                </div>
                <div class="footerColumn">
                    <span class="footerLink">
                        Пользовательское соглашение
                    </span>
                    <span class="footerLink">
                        Реклама
                    </span>
                    <span class="footerLink">
                        Обратная связь
                    </span>
                </div>
                <div class="footerColumn">
                    <span class="footerLink">
                        Сейчас в СМИ статистика
                    </span>
                    <span class="footerLink">
                        Справка
                    </span>
                    <span class="footerLink">
                        
                    </span>
                </div>
            </div>
            <span class="footerLink">
                © 2021 Яндекс
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    .footer {
        display: flex;
        justify-content: space-around;
    }

    .footerColumns {
        display: flex;
        justify-content: space-around;
        width: 85%;
    }

    .footerColumn {
        display: flex;
        flex-direction: column;
    }

    .footerLink {
        cursor: pointer;
        margin: 5px 0px;
        color: rgb(150, 150, 150);
    }
</style>