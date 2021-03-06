Vue.component('demo', {
    props: ['component'],
    data() {
        return {
            size: '98.7%',
            content: '',
            tab: 'display'
        }
    },
    computed: {
        componentUrl() {
            return `/components/component/${this.component}.html`
        },
        dom() {
            var content = this.content;
            var dom = document.createElement( 'html' );
            dom.innerHTML = content;
            return dom;
        },
        title() {
            var title = this.dom.getElementsByTagName('title')[0];
            if( title ) return title.innerText;
            return '';
        },
        code() {
            var code = this.dom.getElementsByTagName('body')[0];
            if( code ) return code.innerHTML.trim();
            return '';
        }
    },
    mounted() {
        console.log('Fetching component',this.componentUrl)
        fetch( this.componentUrl ).then(response => {
            return response.text();
        })
        .then(data => {
            this.content = data;
        });
    },
    methods: {
        mousedown(e) {
            window.addEventListener('mousemove', this.resize);
            window.addEventListener('mouseup', this.mouseup);
        },
        mouseup(e){
            this.$refs.iframe.style.pointerEvents = 'auto';
            window.removeEventListener('mousemove', this.resize);
        },
        resize(e) {
            this.$refs.iframe.style.pointerEvents = 'none';
            this.$refs.iframe.style.width = e.pageX - this.$refs.iframe.getBoundingClientRect().left + 'px';
        },
        copy() {
            if (!navigator.clipboard) {
                alert('Browser copy not supported');
                return
            }
            navigator.clipboard.writeText(this.code);
        }
    },
    template: `<div class="demo-preview">
    <div class="demo-frame-toolbar">
        <div class="title text-m">{{title}}</div>
        <div class="devices" v-if="tab=='display'">
            <svg @click="size='592px'" width="14" height="20" viewBox="0 0 14 20">
                <path id="xs" d="M12.71,16.29l-.15-.12a.76.76,0,0,0-.18-.09L12.2,16a1,1,0,0,0-.91.27,1.15,1.15,0,0,0-.21.33,1,1,0,0,0,1.3,1.31,1.46,1.46,0,0,0,.33-.22.99.99,0,0,0,0-1.4ZM16,2H8A3,3,0,0,0,5,5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z" transform="translate(-5 -2)" class="fill" />
            </svg>
            <svg @click="size='768px'" width="16" height="20" viewBox="0 0 16 20">
                <path id="s" d="M17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Zm1,17a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1Zm-5.29-2.71A1,1,0,0,0,11.8,16l-.18.06a.76.76,0,0,0-.18.09l-.15.12a1.034,1.034,0,0,0,0,1.42,1.46,1.46,0,0,0,.33.22A1,1,0,0,0,13,17a.84.84,0,0,0-.08-.38,1.15,1.15,0,0,0-.21-.33Z" transform="translate(-4 -2)" class="fill" />
            </svg>
            <svg @click="size='992px'" width="20" height="16" viewBox="0 0 20 16">
                <path id="m" d="M21,14H20V7a3,3,0,0,0-3-3H7A3,3,0,0,0,4,7v7H3a1,1,0,0,0-1,1v2a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14ZM6,7A1,1,0,0,1,7,6H17a1,1,0,0,1,1,1v7H6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V16H20Z" transform="translate(-2 -4)" class="fill" />
            </svg>
            <svg @click="size='1200px'" width="20" height="18" viewBox="0 0 20 18">
                <path id="l" d="M19,3H5A3,3,0,0,0,2,6v8a3,3,0,0,0,3,3h6v2H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2H13V17h6a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V6A1,1,0,0,1,5,5H19a1,1,0,0,1,1,1Z" transform="translate(-2 -3)" class="fill" />
            </svg>
            <svg @click="size='1800px'" width="20" height="20" viewBox="0 0 20 20">
                <path id="xl" d="M19,2H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H8v2H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2H16V18h3a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM14,20H10V18h4Zm6-5a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V14H20Zm0-3H4V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z" transform="translate(-2 -2)" class="fill" />
            </svg>
            <svg @click="size='2400px'" width="27.07" height="20" viewBox="0 0 27.07 20">
                <path id="xxl" d="M22.226,2H1.156a3,3,0,0,0-3,3V15a3,3,0,0,0,3,3H8v2H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2H16V18h6.226a3,3,0,0,0,3-3V5A3,3,0,0,0,22.226,2ZM14,20H10V18h4Zm9.226-5a1,1,0,0,1-1,1H1.156a1,1,0,0,1-1-1V14h23.07Zm0-3H.156V5a1,1,0,0,1,1-1h21.07a1,1,0,0,1,1,1Z" transform="translate(1.844 -2)" class="fill" />
            </svg>
        </div>
        <div class="actions">
            <nav class="nav nav-active--fill-light">
                <ul class="nav-items">
                    <li class="nav-item nav-sep"><a class="nav-link" @click="copy()">Copy</a></li>
                    <li class="nav-item" :class="{'active':tab=='display'}"><a tabindex="1" class="nav-link" @click="tab='display'">Preview</a></li>
                    <li class="nav-item" :class="{'active':tab=='source'}"><a class="nav-link" @click="tab='source'">Code</a></li>
                </ul>
            </nav>
        </div>
    </div>
    <div class="demo-content">
        <div v-if="tab=='display'" class="demo-frame">
            <iframe ref="iframe" :style="{width: size}" :srcdoc="content"></iframe>
            <div @mousedown.prevent="mousedown" ref="handle" class="demo-frame-handle"><svg fill="#fff" viewBox="0 0 24 24"><path d="M8 5h2v14H8zM14 5h2v14h-2z"></path></svg></div>
        </div>
        <div v-if="tab=='source'" class="demo-source"><pre>{{code}}</pre></div>
    </div>
</div>`
})
new Vue({
    el: '#docs',
});