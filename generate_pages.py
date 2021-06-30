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

pages_order = [
        'index',
        'personal_well_being',
        'who_am_i/index',
        'personal_agency/index',
        'references',
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
            'es': 'test',
            'ht': 'test',
            'pt': 'test',
            },
        'who_am_i/passion_and_interests': {
            'en': 'Passions and Interests',
            'fr': 'Passions et Intérêts',
            'es': 'test',
            'ht': 'test',
            'pt': 'test',
            },
        'personal_well_being': {
            'en': 'Step 1:<br></br>Take Care Of Yourself',
            'fr': 'test',
            'es': 'test',
            'ht': 'test',
            'pt': 'test',
            },
        'who_am_i/values': {
            'en': 'Values in Work and Life',
            'fr': 'Explorez vos valeurs familiales envers le travail',
            'es': 'test',
            'ht': 'test',
            'pt': 'test',
            },
        'who_am_i/know_your_talents': {
            'en': 'Know Your Talents',
            'fr': 'Découvrez ce qui est le plus important pour vous',
            'es': 'test',
            'ht': 'test',
            'pt': 'test',
            },
        'personal_agency/index': {
            'en': 'Step 3:<br></br>Take Charge',
            'fr': 'test',
            'es': 'test',
            'ht': 'test',
            'pt': 'test',
            },
        'references': {
            'en': 'References',
            'fr': 'test',
            'es': 'test',
            'ht': 'test',
            'pt': 'test',
            },
        'who_am_i/index':{
            'en': 'Step 2:<br></br>Know Who You Are',
            'fr': 'Step 2:<br></br>Sachez qui vous êtes',
            'es': 'test',
            'ht': 'test',
            'pt': 'test',
            },

        'personal_agency/business': {
            'en': 'Consider Starting your own Business or Service',
            'fr': 'test',
            'es': 'test',
            'ht': 'test',
            'pt': 'test',
            },
        'personal_agency/goals': {
            'en': 'Develop Life and Career Goals',
            'fr': 'test',
            'es': 'test',
            'ht': 'test',
            'pt': 'test',
            },
        'personal_agency/research': {
            'en': 'Do the Research',
            'fr': 'test',
            'es': 'test',
            'ht': 'test',
            'pt': 'test',
            },
        'personal_agency/online': {
            'en': 'Create a Viable Online Presence',
            'fr': 'test',
            'es': 'test',
            'ht': 'test',
            'pt': 'test',
            },
        'personal_agency/parallel': {
            'en': 'Parallel Pursuits',
            'fr': 'test',
            'es': 'test',
            'ht': 'test',
            'pt': 'test',
            },
        'personal_agency/interview': {
            'en': 'Prepare for your Job Interview',
            'fr': 'test',
            'es': 'test',
            'ht': 'test',
            'pt': 'test',
            },
        'personal_agency/education': {
            'en': 'Pursue your Education',
            'fr': 'test',
            'es': 'test',
            'ht': 'test',
            'pt': 'test',
            },
        'personal_agency/mentor': {
            'en': 'Seek a Mentor',
            'fr': 'test',
            'es': 'test',
            'ht': 'test',
            'pt': 'test',
            },
        'personal_agency/transactions': {
            'en': 'Transactions most likely to get me a job in the quickest amount of time',
            'fr': 'test',
            'es': 'test',
            'ht': 'test',
            'pt': 'test',
            },
        'personal_agency/volunteer': {
            'en': 'Volunteer!',
            'fr': 'test',
            'es': 'test',
            'ht': 'test',
            'pt': 'test',
            },
    }

def generate_language_links(curr_language, slug):
    return ''
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
    for page in pages_order:
        if page == slug:
            page_links += '<li>' + page_titles_lookup[page][language].replace('<br></br>',' ') + '</li>'
        else:
            if page == 'index':
                link = language + '/'
            else:
                link = language + '/' + page
            page_links += '<li><Link to="/' + link.replace('index','') + '">' + page_titles_lookup[page][language].replace('<br></br>',' ') + '</Link></li>'
    page_links += '</ul>'
    return page_links

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

    f = open(filename, 'r', encoding='ISO-8859-1')
    text = f.read()
    f.close()

    f = open('src/pages/' + filename[10:] + '.js', 'w')
    new_text = template.replace('CONTENT', text).replace('DEFAULT_TITLE', site_title_lookup[language]).replace('LANGUAGE', language).replace('IMAGE', images_lookup[slug])
    new_text = new_text.replace('PAGE_TITLE_WO_HTML', page_titles_lookup[slug][language].replace("<br></br>", " "))
    new_text = new_text.replace('PAGE_TITLE_W_HTML', page_titles_lookup[slug][language])
    new_text = new_text.replace('LNG_LINKS', generate_language_links(language, slug))
    new_text = new_text.replace('PG_LINKS', generate_page_links(language, slug))
    new_text = new_text.replace('<a ', '<a target="_blank" rel="noreferrer" ')
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
    f.write(new_text)
    f.close()
    
    if slug == 'index' and language == 'en':
        f = open('src/pages/index.js', 'w')
        f.write(new_text.replace("/..", ""))
        f.close()


