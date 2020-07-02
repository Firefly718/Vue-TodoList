Vue.component('task', {
    props: ['data'],
    methods: {
        task_done() {
            this.$emit('task_done');
        }
    },
    template: `
    <div class="task">
        <div class="task__wrap">
            <div class="task__text">
                <h3 class="task__title">{{data.title}}</h3>
                <p class="task__desc">{{data.desc}}</p>
            </div>

            <button class="task__done" @click="task_done()">
                <i class="fas fa-check-circle"></i>
            </button>

            <button class="task__remove" @click="task_remove()">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    </div>
    `
})

var vue = new Vue({
    el:'#app',
    data: {
        new_task: {
            title: '',
            desc: ''
        },
        tasks: [
            {
                title: 'Finish to watch video about Vue',
                desc: 'How to do simple "todo list" with Vue.JS.'
            },
            {
                title: 'Questions map',
                desc: 'To write all questions about a current task in my MindMap.'
            },
            {
                title: 'Explore questions',
                desc: 'Explore all confusing moments about Vue.JS from the MindMap.'
            }
        ],
        tasks_second: [
            {
                title: 'Go to sleep',
                desc: 'First - you should to have a good sleep.'
            },
            {
                title: 'Actions after awakening',
                desc: 'After your awakening (aprox. 6-8h of sleep) you need doing smt from 1 minute to 50 minutes. For example, drink a couple of water, go to the bathroom, make a meditation and etc. '
            },
            {
                title: 'Next sleep',
                desc: 'After your activity you need take a next sleep and wait a next, important awakening for getting the phase.'
            },
            {
                title: 'Enter to phase',
                desc: 'When you will feel your next awakening, you have to try enter to phase (preferably with closed eyes).'
            },
            {
                title: 'Enter to phase - actions',
                desc: 'You need to catch the moment and try to fly out of the body (without your muscle power).'
            },
            {
                title: 'Entering',
                desc: 'If you will fly out of the body you need to do smt quickly (for example, you can wave your hands and grope smt in dark, trying to see smt).'
            },
            {
                title: 'You are in phase',
                desc: 'Congratulations! If you can see smt, you can everything in the phase. Good luck!'
            },
            {
                title: 'Wake up Neo...',
                desc: 'The Matrix has you.'
            }
        ]
    },
    methods: {
        done_task(id) {
            this.tasks.splice(id, 1);
        },
        add_task() {
            if(this.new_task.title != '') {
                this.tasks.push({
                    title: this.new_task.title,
                    desc: this.new_task.desc
                });
                    this.new_task.title = '',
                    this.new_task.desc = ''
            }
        }
    }
});