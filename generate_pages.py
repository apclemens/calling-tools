import os

site_title_lookup = {
        'en': 'Calling Tools',
        'fr': 'Outils d\'Appel',
        'es': 'Herramientas de Llamada',
        'ht': 'Rele Zouti',
        'pt': 'Ferramentas de Chamada',
    }

languages_lookup = {
        'en': 'English',
        'fr': 'Français',
        'es': 'Español',
        'ht': 'Krèyol ayisyen',
        'pt': 'Português',
    }

languages_order = [
        'en', 'fr', 'es', 'ht', 'pt'
    ]

images_lookup = {
        'index': 'paths3.jpg',
        'who_am_i/passion_and_interests': 'inventory.jpg',
        'personal_well_being': 'rest.jpg',
        'who_am_i/values': 'inventory.jpg',
        'who_am_i/know_your_talents': 'inventory.jpg',
        'personal_agency/index': 'map.jpg',
        'references': 'paths3.jpg',
        'who_am_i/index': 'inventory.jpg',

        'personal_agency/business': 'map.jpg',
        'personal_agency/goals': 'map.jpg',
        'personal_agency/research': 'map.jpg',
        'personal_agency/online': 'map.jpg',
        'personal_agency/parallel': 'map.jpg',
        'personal_agency/interview': 'map.jpg',
        'personal_agency/education': 'map.jpg',
        'personal_agency/mentor': 'map.jpg',
        'personal_agency/transactions': 'map.jpg',
        'personal_agency/volunteer': 'map.jpg',
    }

page_titles_lookup = {
        'index': {
            'en': 'What Is Calling?',
            'fr': 'Qu\'est-ce que l\'appel?',
            'es': '¿Qué es el llamado?',
            'ht': 'Ki sa ki yon apèl?',
            'pt': 'O que está chamando?',
            },
        'who_am_i/passion_and_interests': {
            'en': 'Passions and Interests',
            'fr': 'Passions et Intérêts',
            'es': 'Pasiones e intereses',
            'ht': 'Pasyon ak enterè',
            'pt': 'Paixões e interesses',
            },
        'personal_well_being': {
            'en': 'Step 1:<br></br>Take Care Of Yourself',
            'fr': 'Étape 1:<br></br>Prenez Soin de Vous',
            'es': 'Paso 1:<br></br>Cuídate',
            'ht': 'Etap 1:<br></br>Pran swen tet ou',
            'pt': 'Passo 1<br></br>Te cuide',
            },
        'who_am_i/values': {
            'en': 'Values in Work and Life',
            'fr': 'Explorez vos valeurs familiales envers le travail',
            'es': 'Valores en el trabajo y la vida',
            'ht': 'Valè nan travay ak lavi',
            'pt': 'Conheça os seus valores de trabalho',
            },
        'who_am_i/know_your_talents': {
            'en': 'Know Your Talents',
            'fr': 'Découvrez ce qui est le plus important pour vous',
            'es': 'Conozca sus talentos',
            'ht': 'Konnen talan ou yo',
            'pt': 'Conheça seus talentos',
            },
        'personal_agency/index': {
            'en': 'Step 3:<br></br>Take Charge',
            'fr': 'Étape 3:<br></br>Prenez les choses en main',
            'es': 'Paso 3:<br></br>hazte cargo',
            'ht': 'Etap 4:<br></br>Pran chaj',
            'pt': 'Passo 3:<br></br>Assuma o controle',
            },
        'references': {
            'en': 'References',
            'fr': 'Les références',
            'es': 'Referencias',
            'ht': 'Referans',
            'pt': 'Referências',
            },
        'who_am_i/index':{
            'en': 'Step 2:<br></br>Know Who You Are',
            'fr': 'Étape 2:<br></br>Sachez qui vous êtes',
            'es': 'Paso 2:<br></br>Conoce quién eres',
            'ht': 'Etap 2:<br></br>Konnen kiyès ou ye',
            'pt': 'Passo 2:<br></br>Saiba quem você é',
            },

        'personal_agency/business': {
            'en': 'Consider Starting your own Business or Service',
            'fr': 'Envisagez de créer votre propre entreprise ou service',
            'es': 'Considere iniciar su propio negocio o servicio',
            'ht': 'Konsidere w kòmanse pwòp biznis ou oswa sèvis',
            'pt': 'Considere iniciar seu próprio negócio ou serviço',
            },
        'personal_agency/goals': {
            'en': 'Develop Life and Career Goals',
            'fr': 'Développez des objectifs de vie et de carrière',
            'es': 'Desarrollar metas profesionales y de vida',
            'ht': 'Devlope objektif lavi ak karyè',
            'pt': 'Desenvolver objetivos de vida e carreira',
            },
        'personal_agency/research': {
            'en': 'Do the Research',
            'fr': 'Faites la recherche!',
            'es': 'Hacer la investigación',
            'ht': 'Fè rechèch ou',
            'pt': 'Faça a pesquisa!',
            },
        'personal_agency/online': {
            'en': 'Create a Viable Online Presence',
            'fr': 'Créez une présence en ligne viable',
            'es': 'Cree una presencia en línea viable',
            'ht': 'Kreye yon prezans solid an liy',
            'pt': 'Crie uma presença on-line viável',
            },
        'personal_agency/parallel': {
            'en': 'Parallel Pursuits',
            'fr': 'Poursuites parallèles',
            'es': 'Persecuciones paralelas',
            'ht': 'Pouswit Paralèl',
            'pt': 'Perseguições Paralelas',
            },
        'personal_agency/interview': {
            'en': 'Prepare for your Job Interview',
            'fr': 'Préparez votre entretien d\'embauche',
            'es': 'Prepárese para su entrevista de trabajo',
            'ht': 'Prepare w pou entèvyou travay la',
            'pt': 'Prepare-se para sua entrevista de emprego',
            },
        'personal_agency/education': {
            'en': 'Pursue your Education',
            'fr': 'Poursuivez vos études',
            'es': 'Persiga su educación',
            'ht': 'Kouri dèyè edikasyon ou',
            'pt': 'Prossiga sua educação',
            },
        'personal_agency/mentor': {
            'en': 'Seek a Mentor',
            'fr': 'Cherchez un mentor',
            'es': 'Buscar un/a mentor/a',
            'ht': 'Chèche yon konseye',
            'pt': 'Procure um mentor',
            },
        'personal_agency/transactions': {
            'en': 'Transactions most likely to get me a job in the quickest amount of time',
            'fr': 'Scénarios les plus efficaces pour obtenir le poste',
            'es': 'Es más probable que las transacciones me consigan un trabajo en el menor tiempo posible',
            'ht': 'Sèn ki pi bon pou jwenn travay la',
            'pt': 'Cenários mais eficazes para conseguir o emprego',
            },
        'personal_agency/volunteer': {
            'en': 'Volunteer!',
            'fr': 'Bénévole!',
            'es': 'Voluntario/a!',
            'ht': 'Volontè!',
            'pt': 'Voluntário!',
            },
    }

page_order = [
        'index',
        'personal_well_being',
        'who_am_i/index',
        'who_am_i/values',
        'who_am_i/know_your_talents',
        'who_am_i/passion_and_interests',
        'personal_agency/index',
        'personal_agency/goals',
        'personal_agency/mentor',
        'personal_agency/research',
        'personal_agency/education',
        'personal_agency/volunteer',
        'personal_agency/business',
        'personal_agency/parallel',
        'personal_agency/transactions',
        'personal_agency/online',
        'personal_agency/interview',
        'references'
        ]

back_next_language = {
        'en': ('Back to:', 'Next page:'),
        'fr': ('Retour à:', 'Page suivante:'),
        'pt': ('De volta a:', 'Próxima página:'),
        'ht': ('Retounen nan:', 'Paj kap vini an:'),
        'es': ('De regreso:', 'Siguiente página:'),
        }


def generate_language_links(curr_language, slug):
    language_links = ''
    for language in languages_order:
        if slug == 'index':
            link = language + '/'
        else:
            link = language + '/' + slug
        if language == curr_language:
            language_links += '<Link className="current" to="/' + link.replace('index','') + '">' + languages_lookup[language] + '</Link>'
        else:
            language_links += '<Link to="/' + link.replace('index','') + '">' + languages_lookup[language] + '</Link>'
    return language_links

def generate_page_links(language, slug):
    page_links = '<ul>'
    subpages = False
    for page in page_order:
        if subpages and subpages not in page:
            subpages = False
            page_links += '</ul>'
        if page == slug:
            page_links += '<li>' + page_titles_lookup[page][language].replace('<br></br>',' ') + '</li>'
        else:
            if page == 'index':
                link = language + '/'
            else:
                link = language + '/' + page
            page_links += '<li><Link to="/' + link.replace('index','') + '">' + page_titles_lookup[page][language].replace('<br></br>',' ') + '</Link></li>'

        if page != 'index' and 'index' in page:
            subpages = page.replace('index','')
            page_links += '<ul style={{display: \'none\'}}>'
#            page_links += '<ul>'

    page_links += '</ul>'
    return page_links

def generate_back_next(slug):
    i = page_order.index(slug)
    if i == 0:
        return (False, page_order[i+1])
    if i == len(page_order)-1:
        return (page_order[i-1], False)
    return (page_order[i-1], page_order[i+1])

def generate_back_next_links(language, slug):
    back, nxt = generate_back_next(slug)
    html = ''
    if back:
        html += '<Link className="back_link" to="/' + language + "/" + back.replace('index','') + '">' + back_next_language[language][0] + ' ' + page_titles_lookup[back][language].replace('<br></br>',' ') + '</Link>'
    if nxt:
        html += '<Link className="next_link" to="/' + language + "/" + nxt.replace('index','') + '">' + back_next_language[language][1] + ' ' + page_titles_lookup[nxt][language].replace('<br></br>',' ') + '</Link>'
    return html


def replace_stars(text):
    lines = text.split('\n')
    new_lines = []
    for line in lines:
        if '******' in line:
            new_lines.append('<p style={{textAlign: "center"}}><span style="font-weight: 400;">*************************************</span></p>')
        else:
            new_lines.append(line)
    return '\n'.join(new_lines)

template_file = open('template.js', 'r')
template = template_file.read()

PATH = 'languages'
files = [os.path.join(dp, f) for dp, dn, filenames in os.walk(PATH) for f in filenames]
for filename in files:
    if filename[-4:] == '.swp': continue
    language = filename[10:12]
    slug = filename[13:]

    f = open(filename, 'r')
#    f = open(filename, 'r', encoding='ISO-8859-1')
    text = f.read()
    f.close()

    f = open('src/pages/' + filename[10:] + '.js', 'w')
    new_text = template.replace('CONTENT', text).replace('DEFAULT_TITLE', site_title_lookup[language]).replace('LANGUAGE', language).replace('IMAGE', images_lookup[slug])
    new_text = new_text.replace('PAGE_TITLE_WO_HTML', page_titles_lookup[slug][language].replace("<br></br>", " "))
    new_text = new_text.replace('PAGE_TITLE_W_HTML', page_titles_lookup[slug][language])
    new_text = new_text.replace('LNG_LINKS', generate_language_links(language, slug))
    new_text = new_text.replace('PG_LINKS', generate_page_links(language, slug))
    new_text = new_text.replace('<a ', '<a target="_blank" rel="noreferrer" ')
    new_text = new_text.replace('<b>','').replace('</b>','')
    if len(slug.split('/')) == 2 and 'index' not in slug:
        new_text = new_text.replace('HEADING_SIZE', '3')
    else:
        new_text = new_text.replace('HEADING_SIZE', '4.5')
    if "/" in slug:
        new_text = new_text.replace('DOTS','../')
    else:
        new_text = new_text.replace('DOTS','')
    new_text = replace_stars(new_text)
    new_text = new_text.replace('style="font-weight: 400;"', 'style={{fontWeight: 400}}')
    new_text = new_text.replace('BACK_NXT', generate_back_next_links(language, slug))
    f.write(new_text)
    f.close()
    
    if slug == 'index' and language == 'en':
        f = open('src/pages/index.js', 'w')
        f.write(new_text.replace("/..", ""))
        f.close()


